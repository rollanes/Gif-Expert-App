import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Formula 1', 'Taylor Swift'])


  return (
    <>
    <h1>GifExpertApp</h1>
    <hr />
    <AddCategory setCategories={setCategories} />


    <ol>
        {categories.map((category) => (
            <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}
