import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { fetchData } from '../fetchData';

export const getAllData = async url => {
	const data = await fetchData(url, {
		method: METHODS.GET
	});
	return data;
};

export const createData = async (url, body = {}) => {
	const data = await fetchData(url, {
		method: METHODS.POST,
		body: JSON.stringify(body),
		headers: HEADERS
	});
	return data;
};

export const updateData = async (url, body = {}) => {
	const data = await fetchData(url, {
		method: METHODS.PATCH,
		body: JSON.stringify(body),
		headers: HEADERS
	});
	return data;
};

export const deleteData = async (url, body = {}) => {
	const data = await fetchData(url, {
		method: METHODS.DELETE,
		body: JSON.stringify(body),
		headers: HEADERS
	});
	return data;
};
