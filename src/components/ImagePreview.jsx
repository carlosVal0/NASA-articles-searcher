import '../styles/ImagePreview.css'

export function ImagePreview ({item}){

    return (
        <div className="image-item">
            <h2>{item?.data[0]?.title}</h2>
            <img src={item?.links[0]?.href} alt="" />
            <span>{item?.data[0]?.media_type}</span>
            <p>{item?.data[0]?.description}</p>
        </div>
    )

}