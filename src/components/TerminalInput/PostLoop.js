import React from "react"
import PostItem from "../PostItem"

const PostLoop = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    category={hit.category}
  />
)

export default PostLoop