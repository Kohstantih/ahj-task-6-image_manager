export default class DnDFiles {
  constructor(container) {
    this.container = container;
    this.boxTrap = this.container.querySelector('.box_trap');
    this.fileLoader = this.boxTrap.querySelector('.file-loader');
    this.boxPreview = this.container.querySelector('.box_preview');

    this.clickLoad = this.clickLoad.bind(this);
  }

  activation() {
    this.boxTrap.addEventListener('click', () => {
      this.fileLoader.dispatchEvent(new MouseEvent('click'));
    });

    this.fileLoader.addEventListener('input', this.clickLoad);

    this.boxTrap.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    this.boxTrap.addEventListener('drop', (e) => {
      e.preventDefault();

      const file = e.dataTransfer.files && e.dataTransfer.files[0];

      if (file) {
        const url = URL.createObjectURL(file);
        const preview = DnDFiles.createPreview(url);

        this.boxPreview.append(preview);
        this.fileLoader.value = '';
      }
    });
  }

  clickLoad() {
    const file = this.fileLoader.files && this.fileLoader.files[0];

    if (file) {
      const url = URL.createObjectURL(file);
      const preview = DnDFiles.createPreview(url);

      this.boxPreview.append(preview);
      this.fileLoader.value = '';
    }
  }

  static createPreview(url) {
    const preview = document.createElement('div');
    preview.classList.add('preview');

    const image = document.createElement('img');
    image.classList.add('preview_img');
    image.src = url;

    const btn = document.createElement('button');
    btn.classList.add('btn-del');
    btn.textContent = String.fromCharCode(10060);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      preview.remove();
    });
    preview.append(image);
    preview.append(btn);

    return preview;
  }
}
