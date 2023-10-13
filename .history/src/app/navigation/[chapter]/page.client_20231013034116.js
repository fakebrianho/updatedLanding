// File: ./src/app/navigation/[chapter]/page.client.js
import { Navigation } from '../../../../components/Navigation/Navigation'

function Page({ child_nodes, title }) {
	return <Navigation child_nodes={child_nodes} title={title} />
}

export default Page
