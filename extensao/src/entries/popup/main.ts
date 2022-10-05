// import logo from "~/assets/logo.svg";
import { badOrigins } from "~/badOrigins";
import "./style.css";

// const imageUrl = new URL(logo, import.meta.url).href;

const html = `
<div class="reclamadinha-popup">
  <div class="modal">
    <h1>Cuidado! Este site recebeu <b>9</b> denúncias de fraude:</h1>
    <div class="comments">
      <div>
        <div class="upvotes">
          <svg class="upvote" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowUpRoundedIcon" aria-label="fontSize medium"><path d="M8.12 14.71 12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71a.9959.9959 0 0 0-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z"></path></svg>
          <span class="value">12</span>
          <svg class="downvote" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowDownRoundedIcon" aria-label="fontSize medium"><path d="M8.12 9.29 12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7a.9959.9959 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"></path></svg>
        </div>
        <div class="content">
          <b>Fulano</b>
          Não entregou o pacote
        </div>
      </div>
      <div>
        <div class="upvotes">
          <svg class="upvote" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowUpRoundedIcon" aria-label="fontSize medium"><path d="M8.12 14.71 12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71a.9959.9959 0 0 0-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z"></path></svg>
          <span class="value">12</span>
          <svg class="downvote" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowDownRoundedIcon" aria-label="fontSize medium"><path d="M8.12 9.29 12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7a.9959.9959 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"></path></svg>
        </div>
        <div class="content">
          <b>João</b>
          Recebi cobranças indevidas no meu cartão
        </div>
      </div>
    </div>
  </div>
</div>`

chrome.tabs.query({
  active: true
}).then(([tab]) => {
  const origin = new URL(tab.url!).origin
  const isBad = badOrigins.some(o => origin.includes(o))
  document.querySelector("#app")!.innerHTML = isBad ? html : `<h1 style="padding: 8px">Nada encontrado!</h1>`
})
