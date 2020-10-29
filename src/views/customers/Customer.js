import React, { useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCardImg, CCol, CRow, CImg, CCardFooter, CButton, CCarousel, CCarouselIndicators, CCarouselInner, CCarouselItem, CCarouselCaption, CCarouselControl } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import customersData from './CustomersData'

const Customer = ({match}) => {
  const customer = customersData.find( customer => customer.id.toString() === match.params.id)
  const customerDetails = customer ? Object.entries(customer) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]
    
  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>Customer id: {match.params.id}</CCardHeader>
          <CCardBody>
            <table className="table table-hover">
              <tbody>
                {customerDetails.map(([key, value], index) => {
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

export default Customer
