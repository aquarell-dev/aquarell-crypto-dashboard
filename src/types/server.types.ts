export type ResponseTypes = 'ping' | 'forks'

export type ResponseData<T = any> = {
	type: ResponseTypes
	message: T
}
