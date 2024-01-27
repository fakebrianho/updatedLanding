// const INDEX_JSON = require('./index.json');
const INDEX_JSON = require('../public/index.json')

class ChapterInfo {
	/**
	 * @param {string} title
	 * @param {string} fileName
	 */
	constructor(title, fileName) {
		this.title = title
		this.fileName = fileName
	}
}

class Chapter extends ChapterInfo {
	/**
	 * @param {string} title
	 * @param {string} fileName
	 * @param {Chapter[]} subChapters
	 * @param {ChapterInfo[]} parentChapters
	 * @returns {Chapter}
	 */
	constructor(title, fileName, subChapters = [], parentChapters = []) {
		super(title, fileName)
		this.subChapters = subChapters
		this.parentChapters = parentChapters
	}

	setSubChapters(subChapters) {
		this.subChapters = subChapters
	}

	setParentChapters(parentChapters) {
		this.parentChapters = parentChapters
	}

	getParentChapters() {
		return this.parentChapters
	}
}

class Collection {
	/**
	 * @param {string} title
	 * @param {Chapter} chapter
	 * @returns {Collection}
	 */
	constructor(title, chapter = undefined) {
		this.title = title
		this.chapter = chapter
	}
}

class Book {
	/**
	 * @param {Collection[]} collections
	 * @returns {Book}
	 */
	constructor(collections) {
		this.collections = collections
	}

	getChapters() {
		return this.collections
			.map((collection) => collection.chapter)
			.filter((chapter) => chapter !== undefined)
	}

	/**
	 * @param {string} title
	 * @returns {Chapter[]}
	 */
	findChapterByTitle(title) {
		function findChapters(chapters, name) {
			let results = []

			for (let i = 0; i < chapters.length; i++) {
				if (chapters[i].title === name) {
					results.push(chapters[i])
				}

				let found = findChapters(chapters[i].subChapters, name)

				if (found.length > 0) {
					results = results.concat(found)
				}
			}

			return results
		}

		const chapters = this.getChapters()
		return findChapters(chapters, title)
	}

	/**
	 * @param {string} title
	 * @returns {Chapter[]}
	 */
	findChapterByFileName(fileName) {
		function findChapters(chapters, name) {
			let results = []

			for (let i = 0; i < chapters.length; i++) {
				if (chapters[i].fileName === name) {
					results.push(chapters[i])
				}

				let found = findChapters(chapters[i].subChapters, name)

				if (found.length > 0) {
					results = results.concat(found)
				}
			}

			return results
		}
		const chapters = this.getChapters()
		return findChapters(chapters, fileName)
	}
}

/**
 * @param {any} anything
 * @returns {Chapter}
 * @throws {Error} if anything is not an array or object with title and file_name
 */
function anythingToChapter(anything) {
	function arrayToChapter(a) {
		const currentChapter = a[0]
		const currentChapterTitle = currentChapter.title
		const currentChapterFileName = currentChapter.file_name
		const subChapters = a[1]
		const parsedSubChapters = subChapters.map(anythingToChapter)
		return new Chapter(
			currentChapterTitle,
			currentChapterFileName,
			parsedSubChapters
		)
	}

	function objectToChapter(o) {
		const currentChapterTitle = o.title
		const currentChapterFileName = o.file_name
		return new Chapter(currentChapterTitle, currentChapterFileName)
	}

	if (Array.isArray(anything)) {
		return arrayToChapter(anything)
	}
	if (typeof anything === 'object') {
		return objectToChapter(anything)
	}
	if (anything === null || anything === undefined) {
		return undefined
	}
	throw new Error('anythingToChapter: unknown anything type')
}

/**
 * @param {Chapter} chapter
 * @param {ChapterInfo[]} parentChapters
 * @returns {Chapter}
 */
function addParentField(chapter, parentChapters = []) {
	let updatedChapter = {
		...chapter,
		parentChapters: parentChapters,
	}

	if (chapter.subChapters && chapter.subChapters.length > 0) {
		updatedChapter.subChapters = chapter.subChapters.map((subChapter) =>
			addParentField(subChapter, [
				...parentChapters,
				new ChapterInfo(chapter.title, chapter.fileName),
			])
		)
	}

	return updatedChapter
}

/**
 * @param {any[]} rawJSON
 * @returns {Book}
 */
function makeBook(rawJSON) {
	const topLevelUnparsedCollections = rawJSON.map(({ col, index }) => {
		const rawChapter = Array.isArray(index) ? index[0] : index
		return {
			collectionTitle: col,
			rawChapter: rawChapter,
		}
	})

	const parsedCollections = topLevelUnparsedCollections
		// convert to Chapter
		.map(({ collectionTitle, rawChapter }) => {
			if (rawChapter === null || rawChapter === undefined)
				return new Collection(collectionTitle)

			const parsedChapter = anythingToChapter(rawChapter)
			const parsedChaptersWithParent = addParentField(parsedChapter, [])
			return new Collection(collectionTitle, parsedChaptersWithParent)
		})

	return new Book(parsedCollections)
}

const book = makeBook(INDEX_JSON)
// console.log(book);

const findByTitle = book.findChapterByTitle('Erich Fromm Quote')
// console.log(findByTitle);
const findByFileName = book.findChapterByFileName('erich-fromm-quote')
// console.log(findByFileName);

export { book }
