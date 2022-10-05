import renderContent from "../renderContent";
// import logo from "~/assets/logo.svg";
import "./style.css";
import { badOrigins } from "~/badOrigins";

renderContent(
  import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS,
  (appRoot: HTMLElement) => {
    // const logoImageUrl = new URL(logo, import.meta.url).href;

    const isBad = badOrigins.some(o => location.origin.includes(o))

    if (isBad) {
      appRoot.innerHTML = `
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
        </div>
        <style>
          .reclamadinha-popup {
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: end;
            align-items: flex-start;
            font-family: sans-serif;
          }
          .reclamadinha-popup .modal {
            max-width: 280px;
            padding: 20px;
            background: white;
            height: auto;
            margin: 20px;
            border-radius: 16px;
            border: 1px solid #d3d3d3;
            box-shadow: 2px 2px 16px #0000004b;
          }
          .reclamadinha-popup .modal h1 {
            font-size: 22px;
            text-align: center;
            margin-bottom: 4px
          }
          .reclamadinha-popup .modal .comments {

          }

          .reclamadinha-popup .modal .comments > div {
            padding: 9px;
            margin: 12px 0;
            border-radius: 6px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
          }
          .comments .upvotes {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 11px;
          }

          .comments .upvotes .value {
            font-weight: 600;
          }

          .modal > h1 b {
            // font-weight: 600;
          }
        </style>
      `;
    }
  }
);
