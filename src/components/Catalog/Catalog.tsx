import style from './Catalog.module.scss'

export default function Catalog() {
  return (
    <div className={style.background}>
      <h5 className={style.title}>
        <p>Get a catalog of our</p>
        <p>projects</p>
      </h5>
      <div className={style.block_Catalog}>
        <img
          src={'/src/assets/images/Catalog/Rectangle 203.jpg'}
          alt="img"
          className={style.block_Catalog_img}
        />
        <div className={style.EMail_Block}>
          <h6 className={style.EMail_Block_title}>Leave your email to receive </h6>
          <h6 className={style.EMail_Block_title}>our project catalog</h6>
          <p className={style.EMail_Block_text}>
            The catalog will help you choose a style and plan your layout.
          </p>
          <input
            type="text"
            placeholder="Enter your email"
            className={style.Email_Input}
          />
          <div className={style.checkbox}>
            <div className={style.input_Checkbox}>
              <input type="checkbox" name="" id="" className={style.style_checkbox} />
            </div>
            <p className={style.text_Checkbox}>
              I agree to the processing of personal data
            </p>
          </div>
          <button className={style.EMail_Block_button}>Get the catalog</button>
        </div>
      </div>
      {/* <img src={`/Catalog/images_Catalog/image3.jpg`} alt="alt IMG" /> */}
      <div className={style.Catalog_Images}>
        {Array(8)
          .fill('image')
          .map((e, i) => (
            <img
              key={i}
              src={`/src/assets/images/Catalog/images_Catalog/${e + (i + 1)}.jpg`}
              alt="img"
              className={style.Catalog_Images_img}
            />
          ))}
      </div>
    </div>
  )
}
