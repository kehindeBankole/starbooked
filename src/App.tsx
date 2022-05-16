import React, { Suspense, lazy } from 'react';
import { Nav, Footer } from './components';
import { Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './GlobalContext/GlobalContext';
const Home = lazy(() => import('./pages/home/Home'));
const Services = lazy(() => import('./pages/services/Services'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const Bookings = lazy(() => import('./pages/bookings/Bookings'));
const Bookings_Page = lazy(() => import('./pages/bookings/Bookings_Page'));
const AboutUs = lazy(() => import('./pages/about us/AboutUs'));
const News = lazy(() => import('./pages/News/News'));
const BookArtist = lazy(() => import('./pages/book artist/BookArtist'));
const ArtistInfo = lazy(() => import('./pages/artist info/ArtistInfo'));
const ServiceLearnMore = lazy(() => import('./pages/servicerReadMore/ServiceLearnMore'));
const SearchArtist = lazy(() => import('./pages/search artist/SearchArtist'));

function App() {
	return (
		<GlobalProvider>
			<div className="flex flex-col min-h-screen w-[100%] overflow-x-hidden">
				<Nav />
				<main className="main">
					<Suspense fallback={<p style={{ textAlign: 'center' }}>loading</p>}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/services" element={<Bookings />} />
							<Route path="/services2" element={<Services />} />
							<Route path="/search" element={<SearchArtist />} />
							<Route path="/bookings" element={<Bookings_Page />} />
							<Route path="/company/about" element={<AboutUs />} />
							<Route path="news" element={<News />} />
							<Route path="bookings/:artist" element={<BookArtist />} />
							<Route path="bookings/:artist/:aboutArtist" element={<ArtistInfo />} />
							<Route path="/services/:id" element={<ServiceLearnMore />} />
							<Route path="/company/contact" element={<Contact />} />
						</Routes>
					</Suspense>
				</main>

				<Footer />
			</div>
		</GlobalProvider>
	);
}

export default App;
