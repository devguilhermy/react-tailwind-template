import './styles/tailwind-input.css';

export default function App() {
	const serverUrl = import.meta.env.VITE_EXAMPLE_SERVER_URL;
	console.log('I am using an environment variable!', serverUrl);

	return (
		<div className="flex flex-col items-center w-full p-10">
			<h1 className="text-3xl font-bold text-sky-500">Hello World</h1>
			<p className="mt-4 text-xl font-semibold text-gray-600">
				I am using TailwindCSS!
			</p>
			<a
				href="https://tailwindcss.com"
				className="px-5 py-2 mt-4 font-semibold tracking-wider text-white uppercase transition-all shadow-md shadow-red-300 hover:bg-sky-600 bg-sky-500 rounded-xl"
			>
				Learn more about this amazing tool
			</a>
		</div>
	);
}
