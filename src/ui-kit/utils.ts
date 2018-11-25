export const getOrCreateRoot = (): HTMLDivElement => {
  let root = document.getElementById('modal-root') as HTMLDivElement;
  if (!root) {
    root = document.createElement('div', { is: 'modal-root' });
    // document.getElementById('root').appendChild(root);
  }
  return root;
};
