import { shallowMount } from '@vue/test-utils';
import NavMenu from '@/components/main/NavMenu.vue';

describe('NavMenu.vue', () => {
  it('renders menu for each menus in props.menus', () => {
    const menus = [{
      title: 'Dashboard',
      icon: 'dashboard',
      to: '/dashboard',
    }, {
      title: 'Client Waiting List',
      icon: 'people',
      to: '/queue',
    }];
    const wrapper = shallowMount(NavMenu, {
      propsData: { menus: menus },
    });
    expect(wrapper.findAll('v-list-tile')).toHaveLength(menus.length);
  })

  it('matches snapshot', () => {
    const menus = [{
      title: 'Dashboard',
      icon: 'dashboard',
      to: '/dashboard',
    }, {
      title: 'Client Waiting List',
      icon: 'people',
      to: '/queue',
    }];
    const wrapper = shallowMount(NavMenu, {
      propsData: { menus: menus },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
});
