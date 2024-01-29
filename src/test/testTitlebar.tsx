/*
	<><svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="window-control_close" viewBox="0 0 30 30">
        <line x1="19.5" y1="10.5" x2="10.5" y2="19.5" fill="none" stroke="currentcolor" stroke-linecap="round" />
        <line x1="10.5" y1="10.5" x2="19.5" y2="19.5" fill="none" stroke="currentcolor" stroke-linecap="round" />
    </symbol>

    <symbol id="window-control_maximize" viewBox="0 0 30 30">
        <rect x="10.5" y="10.5" width="9" height="9" fill="none" stroke="currentcolor" />
    </symbol>

    <symbol id="window-control_restore" viewBox="0 0 30 30">
        <polyline points="13.5 12 13.5 9.5 20.5 9.5 20.5 16.5 18 16.5" fill="none" stroke="currentcolor" />
        <rect x="9.5" y="13.5" width="7" height="7" fill="none" stroke="currentcolor" />
    </symbol>

    <symbol id="window-control_minimize" viewBox="0 0 30 30">
        <line x1="10" y1="19.5" x2="20" y2="19.5" fill="none" stroke="currentcolor" />
    </symbol>

    <symbol id="window-control_support" viewBox="0 0 30 30">
        <rect x="13.5" y="19" width="2" height="2" fill="currentcolor" />
        <path d="M16.5,9H12v1h4.5A1.5,1.5,0,0,1,18,11.5v1A1.5,1.5,0,0,1,16.5,14H14v3h1V15h1.5A2.5,2.5,0,0,0,19,12.5v-1A2.5,2.5,0,0,0,16.5,9Z" fill="currentcolor" />
    </symbol>

    <symbol id="window-control_settings" viewBox="0 0 30 30">
        <path d="M22,16.3V13.7H19.81a4.94,4.94,0,0,0-.49-1.18L20.87,11,19,9.13l-1.55,1.55a5,5,0,0,0-1.18-.49V8H13.7v2.19a5,5,0,0,0-1.18.49L11,9.13,9.13,11l1.55,1.55a5,5,0,0,0-.49,1.18H8v2.6h2.19a5,5,0,0,0,.49,1.18L9.13,19,11,20.87l1.55-1.55a4.94,4.94,0,0,0,1.18.49V22h2.6V19.81a4.94,4.94,0,0,0,1.18-.49L19,20.87,20.87,19l-1.55-1.55a4.94,4.94,0,0,0,.49-1.18Zm-7,1.45A2.75,2.75,0,1,1,17.75,15,2.75,2.75,0,0,1,15,17.75Z" fill="currentcolor" />
    </symbol>
</svg><header className="app-header">
        <div className="window-controls-group">
            <button className="icon window-control">
                <svg>
                    <use xlink: href="#window-control_settings" />
                </svg>
            </button>
            <button className="icon window-control">
                <svg>
                    <use xlink: href="#window-control_support" />
                </svg>
            </button>
            <button className="icon window-control">
                <svg>
                    <use xlink: href="#window-control_minimize" />
                </svg>
            </button>
            <button className="icon toggle-icons window-control">
                <svg>
                    <use xlink: href="#window-control_maximize" />
                </svg>
                <svg>
                    <use xlink: href="#window-control_restore" />
                </svg>
            </button>
            <button className="icon window-control window-control-close">
                <svg>
                    <use xlink: href="#window-control_close" />
                </svg>
            </button>
        </div>
    </header><header className="app-header light-theme">
        <div className="window-controls-group">
            <button className="icon window-control">
                <svg>
                    <use xlink: href="#window-control_settings" />
                </svg>
            </button>
            <button className="icon window-control">
                <svg>
                    <use xlink: href="#window-control_support" />
                </svg>
            </button>
            <button className="icon window-control">
                <svg>
                    <use xlink: href="#window-control_minimize" />
                </svg>
            </button>
            <button className="icon toggle-icons window-control">
                <svg>
                    <use xlink: href="#window-control_maximize" />
                </svg>
                <svg>
                    <use xlink: href="#window-control_restore" />
                </svg>
            </button>
            <button className="icon window-control window-control-close">
                <svg>
                    <use xlink: href="#window-control_close" />
                </svg>
            </button>
        </div>
    </header></>

    */

/*
    button {
  padding: 0;
  border: none;
}

button:focus {
  outline: none;
}

.icon {
  position: relative;
  width: var(--size, 30px);
  height: var(--size, 30px);
  transition: 0.15s;
}
.icon svg {
  width: 100%;
  height: 100%;
}

.toggle-icons svg {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.toggle-icons svg:nth-of-type(1) {
  opacity: 1;
}
.toggle-icons svg:nth-of-type(2) {
  opacity: 0;
}

.toggle-icons.toggled svg:nth-of-type(1) {
  opacity: 0;
}
.toggle-icons.toggled svg:nth-of-type(2) {
  opacity: 1;
}

.app-header {
  display: flex;
  height: 40px;
  background-color: #131313;
}

.window-controls-group {
  margin-left: auto;
  display: flex;
  --color: #a8a8a8;
  --color-hover: #dedede;
  --bg-color-hover: #272727;
}

.window-control {
  color: var(--color);
  background-color: transparent;
}
.window-control:hover, .window-control:active {
  color: var(--color-hover);
  background-color: var(--bg-color-hover);
}

.window-control-close {
  --color-hover: #dedede;
  --bg-color-hover: #c21913;
}

.light-theme {
  background-color: #f6f6f6;
}
.light-theme .window-controls-group {
  --color: #828282;
  --color-hover: #4f4f4f;
  --bg-color-hover: #dedede;
}

body {
  padding: 40px;
  background-color: #6c6c6c;
}
body > * + * {
  margin-top: 20px;
}

*/

/*
for(let toggleButton of document.querySelectorAll('.toggle-icons')) {
	toggleButton.addEventListener('click', () => toggleButton.classList.toggle('toggled'));
}
*/
