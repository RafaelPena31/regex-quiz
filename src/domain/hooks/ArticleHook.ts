import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'

export const useArticle = () => useSelector((state: RootState) => state.article.articleList)
export const useArticlePage = (page = 1) => useSelector((state: RootState) => state.article.articleList.slice(page * 4 - 4, page * 4))
export const useArticleById = (id: string) => useSelector((state: RootState) => state.article.articleList.find(a => a.id === id))
export const useOpenedArticle = () => {
  const articleList = useArticle()
  const openedId = useSelector((state: RootState) => state.article.openedArticle)

  return articleList.filter(a => openedId.includes(a.id))
}
