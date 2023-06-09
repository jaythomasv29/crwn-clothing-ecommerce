import { BackgroundImage, DirectoryBodyContainer, DirectoryContainer, DirectoryLink } from "./directory-item.styles"

const Directory = ({ category }) => {
  const { title, imageUrl } = category
  return (
    <DirectoryContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <DirectoryLink to={`/shop/${title.toLowerCase()}`}>
          <h2>{title[0].toUpperCase() + title.slice(1)}</h2>
          <p>Shop Now</p>
        </DirectoryLink>
      </DirectoryBodyContainer>
    </DirectoryContainer>
  )

}

export default Directory