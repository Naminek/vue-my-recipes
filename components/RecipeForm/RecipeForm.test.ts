import Vuetify from 'vuetify'
import { createLocalVue, mount } from '@vue/test-utils'
import RecipeForm from '.'

const localVue = createLocalVue()

describe('RecipeForm', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  function mountFunc (options = {}) {
    return mount(RecipeForm, {
      localVue,
      vuetify: new Vuetify(),
      ...options
    })
  }

  it('should match its snapshot', () => {
    const wrapper = mountFunc()
    expect(wrapper).toMatchSnapshot()
  })
})
