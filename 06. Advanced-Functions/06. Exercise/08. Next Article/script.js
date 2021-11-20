function getArticleGenerator(articles) {
    const array = articles;

    return () => {
        if (array.length > 0) {
            const article = document.createElement('article');
            article.textContent = articles.shift();
            document.querySelector('#content').appendChild(article);
        }
    }
}
