window.addEventListener('keydown', e => {
    const insert = document.getElementById('insert');
    insert.innerHTML = `
    <div class="key bg-white px-[6.8rem] border py-10 text-2xl">
    <small>e.key :</small>
      ${e.key  === ' ' ? 'Space' : e.key}
    </div>
    <div class="key bg-white border px-20 py-10  text-2xl">
    <small>e.KeyCode :</small>
    ${e.keyCode}
    </div>
    <div class="key bg-white border px-20 py-10  text-2xl">
    <small>e.code :</small>
      ${e.code}
    </div>
    `;
})