import React from 'react'
import { shallow } from 'enzyme'
import LabelAndData from '../../../components/Shared/LabelAndData'

describe('rendering label and data', () => {
  const props = { label: 'Amount' }
  const component = shallow(<LabelAndData {...props} />)
  expect(component.html()).toMatch('Amount')

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})

