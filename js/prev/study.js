// JavaScript Document

var oArticleBox=document.getElementById('ArticleBox');
var aoArticleBoxLi=oArticleBox.getElementsByTagName('li');
var oArticleList=document.getElementById('articleList');
var aArticleListLi=oArticleList.getElementsByTagName('li');
for(var i=0;i<aArticleListLi.length;i++)
{
	aArticleListLi[i].index=i;
	aArticleListLi[i].onclick=function()
	{
		for(var i=0;i<aoArticleBoxLi.length;i++)
		{
			aoArticleBoxLi[i].style.opacity=0;
		}
		aoArticleBoxLi[this.index].style.opacity=1;
	}
}
