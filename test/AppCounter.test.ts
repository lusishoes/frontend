import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AppCounter from '~/components/AppCounter.vue'

describe('AppCounter', () => {
  it('увеличивает и уменьшает значение', async () => {
    const wrapper = await mountSuspended(AppCounter)
    const [increment, decrement] = wrapper.findAll('button')

    await increment!.trigger('click')
    await increment!.trigger('click')
    await decrement!.trigger('click')

    expect(wrapper.find('h3').text()).toBe('Counter: 1')
  })
})
