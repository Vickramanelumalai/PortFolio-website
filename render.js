const S = window.SITE, $ = s => document.querySelector(s);
const e = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const img = (src, alt, cls = "") => src ? `<img class="${cls}" src="${e(src)}" alt="${e(alt)}" loading="lazy" onerror="this.remove()">` : "";
const links = l => l.map(x => `<a href="${e(x.url)}" target="_blank" rel="noopener">${e(x.label)}</a>`).join("");
const wrap = (url, inner) => url ? `<a class="cover" href="${e(url)}" target="_blank" rel="noopener">${inner}</a>` : inner;

function career() {
  const c = S.career; document.title = c.name + " - " + c.role;
  $("#app").innerHTML = `
  <header class="top"><div class="wrap bar"><a class="brand" href="index.html">${e(c.brand)}</a>
    <nav><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a><a class="switch" href="creator.html">${e(c.switchLabel)}</a></nav></div></header>
  <main class="wrap">
    <section class="hero">${img(c.photo, c.name, "photo")}<h1>${e(c.name)}</h1><p>${e(c.intro)}</p></section>
    <section><h2>About</h2>${c.about.map(p => `<p>${e(p)}</p>`).join("")}</section>
    <section id="experience"><h2>Experience</h2>${c.experience.map(x => `<article class="row"><div class="when">${e(x.dates)}</div><div><h3>${e(x.role)}, ${e(x.company)}</h3><ul>${x.points.map(p => `<li>${e(p)}</li>`).join("")}</ul></div></article>`).join("")}</section>
    <section id="projects"><h2>Projects</h2><div class="grid">${c.projects.map(p => `<article>${img(p.image, p.title)}<h3>${p.link ? `<a href="${e(p.link)}" target="_blank" rel="noopener">${e(p.title)}</a>` : e(p.title)}</h3><p>${e(p.desc)}</p><p class="tags">${p.tags.map(e).join(", ")}</p></article>`).join("")}</div></section>
    <section id="skills"><h2>Skills</h2><div class="cols">${c.skills.map(g => `<div><h3>${e(g.group)}</h3><ul>${g.items.map(i => `<li>${e(i)}</li>`).join("")}</ul></div>`).join("")}</div>
      <h3>Certifications</h3><ul>${c.certifications.map(i => `<li>${e(i)}</li>`).join("")}</ul></section>
  </main>
  <footer id="contact"><div class="wrap foot"><div><a href="mailto:${e(c.contact.email)}">${e(c.contact.email)}</a><br>${e(c.contact.location)}</div>
    <div class="soc">${links(c.contact.links)}</div><a class="btn" href="mailto:${e(c.contact.email)}">${e(c.contact.button)}</a></div></footer>`;
}

function creator() {
  const c = S.creator; document.title = c.brand;
  $("#app").innerHTML = `
  <header class="top"><a class="brand" href="creator.html">${e(c.brand)}</a><nav><a href="#work">Work</a><a href="#tools">Tools</a><a href="#hello">Hello</a><a href="index.html">${e(c.switchLabel)}</a></nav></header>
  <main>
    <section class="hero"><h1>${e(c.headline)}</h1><p class="sticker">${e(c.intro)}</p></section>
    <section id="work"><h2>Stuff I made</h2><div class="grid">${c.work.map(w => `<article class="card">${wrap(w.link, `${img(w.image, w.title)}<span class="tag">${e(w.tag)}</span><h3>${e(w.title)}</h3><p>${e(w.desc)}</p>`)}</article>`).join("")}</div></section>
    <section id="tools"><h2>What I edit with</h2><p class="chips">${c.tools.map(t => `<span>${e(t)}</span>`).join("")}</p></section>
    <section id="hello" class="hello"><h2>${e(c.contact.headline)}</h2><p>${e(c.contact.text)}</p><a class="btn" href="mailto:${e(c.contact.email)}">${e(c.contact.button)}</a><p class="soc">${links(c.contact.links)}</p></section>
  </main>`;
}
document.body.dataset.page === "creator" ? creator() : career();
