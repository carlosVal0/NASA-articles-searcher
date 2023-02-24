import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import { ImagePreview } from './components/ImagePreview';
import debounce from 'just-debounce-it';
import { useSearch } from './hooks/useSearch';
import { useArticles } from './hooks/useArticles';


function App() {

  const { query, setQuery, error} = useSearch()
  const { articles, getData } = useArticles({query})
  const [renderItems, setRenderItems] = useState(false)

  const debouncedGetData = useCallback(
    debounce( query => {
      getData({query})
    }, 300)
  )

  const handleChange = (event) => {
    const newQuery = event.target.value

    if(newQuery === ''){
      setRenderItems(false)
    }
    else {
      setRenderItems(true)
    }

    setQuery(newQuery)
    debouncedGetData(newQuery)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('executing')
    getData({query})
  }

  return (
    <div className="App">
      <h1>PlanetApp</h1>
      <section className='search-options'>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} type="text" placeholder='Moon, Sun, Galaxy ...' />
          <button type='submit'>Search</button>
        </form>  
        {error && <p style={{color: 'red'}}>{error}</p>}
      </section>

      <main>
        {renderItems && articles.map(item => {
          return <ImagePreview item={item} key={item.data[0].nasa_id}/>
        })}
      </main>
      

    </div>
  )
}

export default App
