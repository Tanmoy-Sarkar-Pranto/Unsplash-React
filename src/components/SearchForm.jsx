import { useState } from "react"
import { useGlobalContext } from "../context"

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchItem = e.target.elements.search.value
    if (!searchItem) return
    // console.log(searchItem)
    e.target.reset()
    setSearchTerm(searchItem)
  }
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="dog"
          className="form-input search-input"
        />
        <button className="btn">Submit</button>
      </form>
    </section>
  )
}
export default SearchForm
