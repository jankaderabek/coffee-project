import { mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import NewCoffeeForm from '~/components/Coffee/NewCoffeeForm.vue'
import * as types from '~/apollo/generated/types'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

const spy = jest.spyOn(types, 'useSendCoffeeMutation')

describe('NewCoffeeForm', () => {
  it('Create new coffee', async () => {
    const createdCoffee = {}

    // @ts-ignore
    spy.mockReturnValue({
      mutate: jest.fn().mockResolvedValue({
        data: {
          createCoffee: {
            coffee: createdCoffee,
          },
        },
      }),
    })

    const wrapper = mount(NewCoffeeForm, { localVue })

    const button = wrapper.find('button')

    await button.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('input')?.[0][0]).toBe(createdCoffee)
  })
})
