/**
 * @class Post.
 * 
 * @param {string} author 
 * @param {date} createdAt 
 * @param {string} urlEasy
 * @param {string} h2Content
 * @param {string} content
 * @param {string} urlLike
 */
function Post(
	author,
	createdAt,
	urlEasy,
	h2Content,
	content,
	urlLike,
) 
{
	const articleElement = document.createElement("article")
	articleElement.classList.add("post")
	const autorElement = document.createElement("p")
	autorElement.classList.add("autor")
	autorElement.innerText = author
	const dateElement = document.createElement("p")
	dateElement.classList.add("date")
	dateElement.innerText = createdAt
	const easyImgElement = document.createElement("img")
	easyImgElement.classList.add("easy")
	easyImgElement.setAttribute("src", urlEasy)
	const h2Element = document.createElement("h2")
	h2Element.innerText = `${h2Content}`
	const contentElement = document.createElement("p")
	contentElement.classList.add("content")
	contentElement.innerText = content
	const likeImgElement = document.createElement("img")
	likeImgElement.classList.add("like")
	likeImgElement.setAttribute("src", urlLike)
	const likeCounterElement = document.createElement("span")
	likeCounterElement.classList.add("counter")
	likeCounterElement.innerText = "0"

	articleElement.appendChild(autorElement)
	articleElement.appendChild(dateElement)
	articleElement.appendChild(easyImgElement)
	articleElement.appendChild(h2Element)
	articleElement.appendChild(contentElement)
	articleElement.appendChild(likeImgElement)
	articleElement.appendChild(likeCounterElement)

	this.articleElement = articleElement
}
Post.prototype.add = function (element) {
    element.appendChild(this.articleElement)
}

/**
 * @class Timer.
 * 
 * @param {number} ms 
 */
function Timer(ms) {
	this.ms = ms
	this.interval = null
}
Timer.prototype.start = function (callback) {
	this.interval = setInterval(callback, this.ms)
	return this
}
Timer.prototype.stop = function () {
	clearInterval(this.interval)
	return this
}
Timer.prototype.stopAfter = function (ms, callback) {
	setTimeout(callback, ms)
	return this
}