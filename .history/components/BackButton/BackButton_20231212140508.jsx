// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'
export default function BackButton() {
	const router = useRouter()

	const goBack = () => {
		router.back()
	}

	return (
		<div class='container'>
			<ul>
				<li>
					<a class='animated-arrow' href='https://google.com'>
						<span class='the-arrow -left'>
							<span class='shaft'></span>
						</span>
						<span class='main'>
							<span class='text'>Discover the Agency</span>
							<span class='the-arrow -right'>
								<span class='shaft'></span>
							</span>
						</span>
					</a>
				</li>
				<li>
					<a class='animated-arrow' href='https://google.com'>
						<span class='the-arrow -left'>
							<span class='shaft'></span>
						</span>
						<span class='main'>
							<span class='text'>View Projects</span>
							<span class='the-arrow -right'>
								<span class='shaft'></span>
							</span>
						</span>
					</a>
				</li>
				<li>
					<a class='animated-arrow' href='https://google.com'>
						<span class='the-arrow -left'>
							<span class='shaft'></span>
						</span>
						<span class='main'>
							<span class='text'>Get in Touch</span>
							<span class='the-arrow -right'>
								<span class='shaft'></span>
							</span>
						</span>
					</a>
				</li>
				<button onClick={goBack}>Back</button>
			</ul>
		</div>
	)
}
