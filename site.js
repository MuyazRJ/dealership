/* Shared car helpers + renderer. You don't need to edit this to add or remove cars (edit cars.js). */
(function () {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const money = n => '£' + Number(n).toLocaleString('en-GB');
  const miles = n => Number(n).toLocaleString('en-GB') + ' miles';
  const slugify = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  const used = {};
  const cars = (window.CARS || []).map(c => {
    let slug = c.slug || slugify(`${c.year} ${c.make} ${c.model}`);
    used[slug] = (used[slug] || 0) + 1;
    if (used[slug] > 1) slug += '-' + used[slug];
    return { ...c, slug, title: `${c.year} ${c.make} ${c.model}`, url: 'car.html?car=' + encodeURIComponent(slug) };
  });

  const ico = (id, v) => `<li><svg class="spec-ico" aria-hidden="true"><use href="#i-${id}"></use></svg><span class="spec-val">${esc(v)}</span></li>`;
  const specs = c => `<ul class="car-specs">${ico('gauge', miles(c.mileage))}${ico('fuel', c.fuel)}${ico('gear', c.gearbox)}</ul>`;

  const card = (c, cls = '') => `
    <article class="car-card ${cls}">
      <div class="media car-media">
        <img src="${esc(c.images && c.images[0])}" alt="${esc(c.title)}" loading="lazy">
        ${c.flag ? `<span class="car-flag car-flag--new">${esc(c.flag)}</span>` : ''}
      </div>
      <div class="car-body">
        <h3 class="car-name">${esc(c.title)}</h3>
        <p class="car-trim">${esc(c.trim)}</p>
        ${specs(c)}
        <div class="car-price"><span class="car-price-label">Pay in full</span><span class="car-price-val">${money(c.price)}</span></div>
        <a class="btn-card" href="${esc(c.url)}" aria-label="View the ${esc(c.title)}">View car
          <svg width="16" height="16" aria-hidden="true"><use href="#i-arrow"></use></svg></a>
      </div>
    </article>`;

  document.querySelectorAll('[data-car-grid]').forEach(g => {
    const list = g.dataset.carGrid === 'featured' ? cars.filter(c => c.featured === true || c.featured === 'true') : cars;
    const cls = g.hasAttribute('data-reveal') ? 'reveal' : '';
    g.innerHTML = list.length
      ? list.map(c => card(c, cls)).join('')
      : '<p class="section-sub">No cars listed right now. Call us on 07591 929767 for what\'s arriving.</p>';
  });

  window.FF = { cars, card, specs, esc, money, miles, find: slug => cars.find(c => c.slug === slug) };
})();
