import '../styles/globals.sass'
import '../components/FontAwsomeIcons';

import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
		
		<>
		<Header />
		<Component {...pageProps} />
		<Footer />
		</>
	)
	
	

}

export default MyApp
