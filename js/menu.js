function createMenu() {
  const menuData = [
    { label: 'Home' },
    {
      label: 'Create and View Characters',
      children: [
        'Character Creator',
        'Character Sheet (viewer)'
      ]
    },
    {
      label: 'The World',
      children: [
        'Maps',
        'Database'
      ]
    },
    {
      label: 'Mechanics and Gameplay',
      children: [
        'Gameplay overview',
        'Detailed Mechanics',
        'Tech'
      ]
    },
    {
      label: 'Login',
      children: [
        'Login',
        'Logout'
      ]
    }
  ];

  const div = document.createElement('div');
  div.className = 'custom-menu';

  const ul = document.createElement('ul');

  menuData.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.label;

    if (item.children) {
      li.classList.add('has-submenu');
      const submenu = document.createElement('ul');
      submenu.className = 'submenu';

      item.children.forEach(sub => {
        const subLi = document.createElement('li');
        subLi.textContent = sub;
        submenu.appendChild(subLi);
      });

      li.appendChild(submenu);
    }

    ul.appendChild(li);
  });

  div.appendChild(ul);

  const main = document.querySelector('main');
  if (main) {
    main.prepend(div);
  }
}

document.addEventListener('DOMContentLoaded', createMenu);
