export const httpClient = {
	async fetch() {
		const response = await window.fetch('/mock_data.json');
		if (response.ok) {
			return response.json();
		} else {
			throw response;
		}
	},
};
