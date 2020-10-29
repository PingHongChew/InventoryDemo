import React, { useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCardImg, CCol, CRow, CImg, CCardFooter, CButton, CCarousel, CCarouselIndicators, CCarouselInner, CCarouselItem, CCarouselCaption, CCarouselControl } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import productsData from './ProductsData'

const Product = ({match}) => {
  const product = productsData.find( product => product.id.toString() === match.params.id)
  const productDetails = product ? Object.entries(product) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  const [link, setLink] = useState("https://media.torque.com.sg/public/2019/04/high-performance-tyres-only-mod.jpg");

  const changeImage = (e) => {
    setLink(e.target.src);
  }

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          {/* <CCardHeader>Product id: {match.params.id}</CCardHeader> */}
          <CCardBody>
            <CCardImg
              src={link}
              // fluid
              height="400"
            />
          </CCardBody>
          <CCardFooter>
            <img onMouseEnter={changeImage} className="mr-2" src="https://picsum.photos/1024/480/?image=54" height="50" width="50"/>
            <img onMouseEnter={changeImage} className="mr-2" src="https://www.alghadatyres.com/wp-content/uploads/2016/02/sailun-tyre-iran.png" height="50" width="50"/>
            <img onMouseEnter={changeImage} className="mr-2" src="https://i.i-sgcm.com/news/article_advice/2018/328_20_l.jpg" height="50" width="50"/>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>Product id: {match.params.id}</CCardHeader>
          <CCardBody>
            <table className="table table-hover">
              <tbody>
                {productDetails.map(([key, value], index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{`${key}:`}</td>
                      <td>
                        <strong>{value}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Product
