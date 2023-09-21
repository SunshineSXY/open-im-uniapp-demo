// https+域名形式   nginx配置可参考(https://github.com/openimsdk/open-im-server/blob/main/config/open-im-ng-example.conf)
const registerUrl = 'https://web.rentsoft.cn/chat'
const apiUrl = 'https://web.rentsoft.cn/api'
const wsUrl = 'wss://web.rentsoft.cn/msg_gateway'

// const registerUrl = 'http://14.29.213.197:10008'
// const apiUrl = 'http://14.29.213.197:10002'
// const wsUrl = 'ws://14.29.213.197:10001'

const getRegisterUrl = () => uni.getStorageSync("IMRegisteUrl") || registerUrl
const getApiUrl = () => uni.getStorageSync('IMApiUrl') || apiUrl
const getWsUrl = () => uni.getStorageSync('IMWsUrl') || wsUrl

module.exports = {
	getRegisterUrl,
	getApiUrl,
	getWsUrl,
}