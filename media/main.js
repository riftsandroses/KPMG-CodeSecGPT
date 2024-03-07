// @ts-nocheck

(function () {
    const vscode = acquireVsCodeApi();

    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code, _lang) {
            return hljs.highlightAuto(code).value;
        },
        langPrefix: 'hljs language-',
        pedantic: false,
        gfm: true,
        breaks: true,
        sanitize: false,
        smartypants: false,
        xhtml: false
    });

    const KPMGSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 21" fill="none" stroke="white" stroke-width="3" class="w-5 mr-2">  <defs id="defs5624" /> <path d="m 62.74202,0.20119 0,16.00227 -0.20416,0.16862 -0.20416,0.16862 -0.19566,0.17706 -0.18715,0.17705 -0.17864,0.17705 -0.17864,0.18549 -0.17013,0.18548 -0.17014,0.18549 0,-17.42713 -17.88969,0 0,14.56898 -1.48018,0 0,-14.56898 -17.88969,0 0,14.59427 -1.48018,0 0,-14.59427 -17.88969,0 0,16.6346 -4.56813,15.08327 4.01519,0 2.0161,-6.67744 0.57846,0 3.33464,6.67744 4.84885,0 -3.23257,-6.67744 7.33282,0 -2.03311,6.67744 4.38098,0 2.00759,-6.66058 0.96977,0 0,-0.0169 1.37809,0 0.11059,0 8.27707,0 -1.93954,6.66059 4.42351,0 1.87999,-6.66059 1.99058,0 0.051,6.66059 3.70894,0 4.26189,-6.66059 2.79021,0 -1.44615,6.66059 4.35546,0 1.42063,-6.66059 2.51799,0 -0.017,0.3794 0.009,0.38783 0.017,0.37097 0.034,0.37097 0.0255,0.17705 0.0255,0.17706 0.034,0.17705 0.034,0.17706 0.0425,0.17705 0.0425,0.16862 0.051,0.16862 0.051,0.16863 0.0596,0.16862 0.0596,0.16019 0.068,0.16019 0.0681,0.15176 0.0766,0.16019 0.0766,0.15176 0.0851,0.14333 0.0851,0.15176 0.0936,0.14333 0.10208,0.1349 0.10209,0.14333 0.11058,0.12646 0.11059,0.1349 0.11059,0.12647 0.1276,0.12647 0.1276,0.11803 0.16163,0.1349 0.16163,0.1349 0.17013,0.12646 0.17864,0.11804 0.17865,0.11804 0.17864,0.1096 0.18715,0.0927 0.19565,0.10117 0.18715,0.0843 0.19566,0.0843 0.19565,0.0759 0.20416,0.0759 0.20416,0.0675 0.20417,0.059 0.20416,0.059 0.20416,0.0506 0.40832,0.0927 0.41684,0.0675 0.40832,0.059 0.40832,0.0506 0.39982,0.0337 0.39131,0.0169 0.3828,0.0169 0.36579,0 0.4934,-0.008 0.49339,-0.008 0.5019,-0.0253 0.50189,-0.0253 0.5019,-0.0422 0.5019,-0.0422 0.5019,-0.0506 0.5019,-0.059 0.5104,-0.0675 0.51041,-0.0759 0.5104,-0.0843 0.51041,-0.0843 0.5104,-0.0927 0.51041,-0.10117 0.5104,-0.10117 0.51891,-0.11804 1.51421,-6.04511 4.96794,0 0,-25.04043 -17.8897,0 z m -56.4593,24.41653 0.0255,-0.0927 0.0596,0.0927 -0.0851,0 z m 15.58437,-8.97072 -0.2552,0.85155 -2.38189,7.84094 -0.0936,0.27823 -7.82621,0 -0.60398,-1.28154 8.43019,-8.54072 -5.4188,0 -6.59273,7.03999 2.13519,-7.03999 -3.99817,0 0,-13.96193 16.60517,0 0,14.81347 z m 4.61916,6.62686 0,0 -0.1276,0.008 -0.11909,0.008 -0.1276,0.008 -0.13611,0 -0.17864,0 -0.15312,0 -0.14462,0.008 -0.13611,0 -1.06334,-0.008 0.49339,-1.80426 0.22968,-0.8937 0.56145,-2.09934 0.17864,0 0.18715,0 0.17864,-0.008 0.17014,0 0.82515,0 0.5019,0.008 0.45936,0.0169 0.20416,0.008 0.19566,0.0169 0.18715,0.0253 0.17013,0.0253 0.15312,0.0253 0.14462,0.0422 0.13611,0.0422 0.11909,0.0506 0.10208,0.0506 0.0936,0.0675 0.0851,0.0675 0.068,0.0843 0.0425,0.0675 0.034,0.0675 0.034,0.0759 0.0255,0.0843 0.017,0.0927 0.009,0.0927 0,0.10117 0,0.1096 -0.009,0.11804 -0.008,0.11803 -0.0255,0.1349 -0.0255,0.1349 -0.0766,0.28666 -0.0936,0.32038 -0.0936,0.2698 -0.10208,0.26136 -0.11058,0.2445 -0.1191,0.22764 -0.0596,0.10118 -0.0596,0.10117 -0.0681,0.10117 -0.0766,0.0927 -0.0766,0.0927 -0.0766,0.0843 -0.0851,0.0843 -0.0851,0.0759 -0.0936,0.0675 -0.0936,0.0759 -0.10208,0.059 -0.11059,0.0675 -0.11059,0.059 -0.11909,0.0506 -0.1191,0.0506 -0.1276,0.0422 -0.1361,0.0506 -0.14462,0.0337 -0.15312,0.0337 -0.15312,0.0337 -0.17014,0.0253 -0.17013,0.0253 -0.17864,0.0169 -0.18715,0.0169 z m 12.0966,2.34386 1.74389,-6.15472 0.0681,6.15472 -1.81194,0 z m 2.65411,-9.84755 -4.1513,0 -2.85826,9.84755 -4.4065,0 0.20416,-0.0843 0.20416,-0.0843 0.19566,-0.0843 0.19565,-0.0927 0.18715,-0.0927 0.17864,-0.10961 0.17865,-0.10117 0.17013,-0.10961 0.17014,-0.11803 0.16162,-0.11804 0.15313,-0.11803 0.15312,-0.1349 0.14461,-0.12647 0.13611,-0.14333 0.13611,-0.1349 0.1276,-0.15176 0.1276,-0.14332 0.1191,-0.1602 0.11058,-0.15176 0.11059,-0.16862 0.10208,-0.16862 0.0936,-0.16862 0.0936,-0.17706 0.0851,-0.18548 0.0851,-0.18549 0.0766,-0.18548 0.068,-0.19392 0.0681,-0.20234 0.051,-0.20235 0.0596,-0.20235 0.0425,-0.21921 0.0425,-0.21077 0.0596,-0.33725 0.051,-0.32038 0.034,-0.30352 0.0255,-0.28666 0.009,-0.28666 -0.009,-0.26136 -0.008,-0.26137 -0.034,-0.2445 -0.034,-0.22764 -0.0596,-0.22764 -0.0596,-0.21078 -0.0851,-0.20235 -0.0936,-0.19391 -0.10208,-0.19392 -0.11909,-0.17705 -0.13611,-0.16862 -0.11059,-0.11804 -0.11059,-0.11803 -0.11909,-0.10118 -0.1276,-0.0927 -0.13611,-0.0927 -0.13611,-0.0843 -0.14461,-0.0759 -0.14462,-0.0675 -0.15312,-0.0675 -0.15312,-0.0506 -0.16163,-0.0506 -0.16163,-0.0506 -0.17013,-0.0422 -0.17014,-0.0337 -0.17013,-0.0337 -0.17865,-0.0253 -0.36579,-0.0506 -0.36579,-0.0253 -0.37429,-0.0253 -0.38281,-0.008 -0.7656,0 -0.7571,0 -0.23819,0 -0.42534,0 -0.52742,0 -0.58697,0 -0.56995,0 -0.48488,0 -0.34027,0 -0.1276,0 0,-13.93664 16.60517,0 0,13.93664 z m 10.089,9.84755 -2.49247,0 3.77699,-5.90179 -1.28452,5.90179 z m 9.28087,-9.56933 -0.009,3.41461 -0.21267,0.29509 -0.19566,0.30352 -0.19565,0.30352 -0.17864,0.30352 -0.17014,0.30352 -0.17013,0.31195 -0.14462,0.30352 -0.14461,0.30352 -0.13611,0.29509 -0.11909,0.30352 -0.1191,0.29509 -0.10208,0.28666 -0.0936,0.28665 -0.0851,0.27823 -0.0766,0.2698 -0.0681,0.26979 -0.0425,0.17706 -0.0425,0.18548 -0.0425,0.17706 -0.034,0.18548 -0.034,0.17705 -0.0255,0.17706 -0.0255,0.17705 -0.017,0.18549 -2.44144,0 2.08416,-9.82226 -7.02658,-0.008 -6.28649,9.83069 -0.45936,0 0,-23.78419 16.61368,0 0,14.21486 z m 9.5786,13.59097 -0.34878,0.059 -0.35728,0.0506 -0.35729,0.0506 -0.34877,0.0422 -0.34878,0.0337 -0.34878,0.0253 -0.34027,0.0169 -0.34027,0 -0.22117,0 -0.22118,-0.008 -0.21267,-0.0169 -0.21266,-0.0253 -0.20417,-0.0337 -0.19565,-0.0337 -0.19566,-0.0422 -0.18714,-0.0506 -0.17865,-0.059 -0.17864,-0.059 -0.17013,-0.0759 -0.16163,-0.0759 -0.16163,-0.0927 -0.15312,-0.0927 -0.14462,-0.10117 -0.1361,-0.10118 -0.13611,-0.11803 -0.1191,-0.12647 -0.11909,-0.12647 -0.11059,-0.14333 -0.10208,-0.14332 -0.0936,-0.1602 -0.0851,-0.16019 -0.0851,-0.16862 -0.0681,-0.17705 -0.0596,-0.19392 -0.051,-0.19391 -0.051,-0.20235 -0.034,-0.21078 -0.0255,-0.21921 -0.017,-0.22764 -0.009,-0.23607 7.74114,0 -0.85067,3.39774 z m 9.81679,-4.02164 -4.18532,0 0.68904,-2.74855 -8.38765,0 -0.68905,2.74855 -4.05772,0 0,-0.56489 0.051,-0.23607 0.0425,-0.23607 0.051,-0.25294 0.051,-0.25293 0.0766,-0.27823 0.0766,-0.27822 0.0851,-0.27823 0.0936,-0.2698 0.10208,-0.26979 0.11059,-0.2698 0.11909,-0.26136 0.1191,-0.26137 0.13611,-0.26136 0.1361,-0.2445 0.14462,-0.25294 0.16163,-0.23607 0.16163,-0.23607 0.16162,-0.22764 0.17865,-0.21921 0.18714,-0.21078 0.19566,-0.20235 0.19566,-0.18548 0.21266,-0.18548 0.21267,-0.17706 0.22118,-0.16019 0.23819,-0.15176 0.23819,-0.1349 0.24669,-0.12646 0.2552,-0.11804 0.26371,-0.10117 0.27222,-0.0843 0.28072,-0.0675 0.28923,-0.059 0.29774,-0.0422 0.30624,-0.0253 0.31475,-0.008 0.2467,0.008 0.24669,0.0169 0.2467,0.0337 0.23819,0.0506 0.11909,0.0337 0.11059,0.0337 0.11059,0.0337 0.10208,0.0506 0.10208,0.0422 0.10208,0.059 0.0936,0.059 0.0936,0.059 0.0851,0.0759 0.0851,0.0759 0.0766,0.0759 0.0766,0.0927 0.0681,0.0843 0.0596,0.10117 0.051,0.1096 0.051,0.10961 0.0425,0.11804 0.034,0.12646 0.0255,0.12647 0.0255,0.14333 0.009,0.14333 0,0.15176 0,0.16019 -0.017,0.16862 5.00197,0 0.0766,-0.34568 0.0681,-0.39626 0.034,-0.21078 0.017,-0.22764 0.017,-0.22764 0,-0.23607 -0.008,-0.2445 -0.0255,-0.25293 -0.0255,-0.11804 -0.017,-0.12647 -0.034,-0.12646 -0.034,-0.12647 -0.0425,-0.1349 -0.0425,-0.12646 -0.051,-0.12647 -0.0596,-0.12647 -0.0596,-0.12647 -0.0766,-0.12646 -0.0766,-0.12647 -0.0851,-0.12647 -0.10208,-0.13489 -0.11059,-0.12647 -0.11059,-0.12647 -0.11909,-0.11803 -0.1276,-0.11804 -0.13611,-0.1096 -0.13611,-0.10118 -0.14461,-0.10117 -0.15313,-0.10117 -0.15312,-0.0843 -0.16162,-0.0843 -0.17014,-0.0843 -0.17013,-0.0759 -0.17865,-0.0759 -0.18715,-0.0675 -0.18714,-0.0675 -0.18715,-0.059 -0.20416,-0.0506 -0.19566,-0.0506 -0.21267,-0.0506 -0.21267,-0.0422 -0.21267,-0.0422 -0.22117,-0.0337 -0.22968,-0.0253 -0.46787,-0.0506 -0.47638,-0.0422 -0.5019,-0.0169 -0.51041,-0.008 -0.3828,0.008 -0.39982,0.008 -0.41683,0.0253 -0.43384,0.0337 -0.45086,0.0506 -0.45936,0.059 -0.46787,0.0759 -0.47638,0.10117 -0.23819,0.0506 -0.2467,0.059 -0.23819,0.0675 -0.24669,0.0675 -0.2467,0.0759 -0.24669,0.0843 -0.2467,0.0843 -0.23819,0.0927 -0.24669,0.10117 -0.2467,0.10961 -0.23819,0.1096 -0.2467,0.11804 -0.23818,0.12646 -0.23819,0.1349 -0.23819,0.1349 -0.23819,0.15176 0,-14.92308 16.6307,0 0,23.78419 z" id="path5037" style="fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.646885;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:0;stroke-dasharray:none" /></svg>`;

    const userSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`;

    const clipboardSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" /></svg>`;

    const checkSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>`;

    const cancelSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>`;

    const sendSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>`;

    const pencilSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>`;

    const plusSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>`;

    const insertSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg>`;

    const textSvg = `<svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" ><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`;

    const closeSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>`;

    const refreshSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`;

    // Handle messages sent from the extension to the webview
    window.addEventListener("message", (event) => {
        const message = event.data;
        const list = document.getElementById("qa-list");

        switch (message.type) {
            case "showInProgress":
                if (message.showStopButton) {
                    document.getElementById("stop-button").classList.remove("hidden");
                } else {
                    document.getElementById("stop-button").classList.add("hidden");
                }

                if (message.inProgress) {
                    document.getElementById("in-progress").classList.remove("hidden");
                    document.getElementById("question-input").setAttribute("disabled", true);
                    document.getElementById("question-input-buttons").classList.add("hidden");
                } else {
                    document.getElementById("in-progress").classList.add("hidden");
                    document.getElementById("question-input").removeAttribute("disabled");
                    document.getElementById("question-input-buttons").classList.remove("hidden");
                }
                break;
            case "addQuestion":
                list.classList.remove("hidden");
                document.getElementById("introduction")?.classList?.add("hidden");
                document.getElementById("conversation-list").classList.add("hidden");

                const escapeHtml = (unsafe) => {
                    return unsafe.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
                };

                list.innerHTML +=
                    `<div class="p-4 self-end mt-4 question-element-ext relative input-background">
                        <h2 class="mb-5 flex">${userSvg}You</h2>
                        <no-export class="mb-2 flex items-center">
                            <button title="Edit and resend this prompt" class="resend-element-ext p-1.5 flex items-center rounded-lg absolute right-6 top-6">${pencilSvg}</button>
                            <div class="hidden send-cancel-elements-ext flex gap-2">
                                <button title="Send this prompt" class="send-element-ext p-1 pr-2 flex items-center">${sendSvg}&nbsp;Send</button>
                                <button title="Cancel" class="cancel-element-ext p-1 pr-2 flex items-center">${cancelSvg}&nbsp;Cancel</button>
                            </div>
                        </no-export>
                        <div class="overflow-y-auto">${escapeHtml(message.value)}</div>
                    </div>`;

                if (message.autoScroll) {
                    list.lastChild?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                }
                break;
            case "addResponse":
                let existingMessage = message.id && document.getElementById(message.id);
                let updatedValue = "";

                const unEscapeHtml = (unsafe) => {
                    return unsafe.replaceAll('&amp;', '&').replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&quot;', '"').replaceAll('&#039;', "'");
                };

                if (!message.responseInMarkdown) {
                    updatedValue = "```\r\n" + unEscapeHtml(message.value) + " \r\n ```";
                } else {
                    updatedValue = message.value.split("```").length % 2 === 1 ? message.value : message.value + "\n\n```\n\n";
                }

                const markedResponse = marked.parse(updatedValue);

                if (existingMessage) {
                    existingMessage.innerHTML = markedResponse;
                } else {
                    list.innerHTML +=
                        `<div class="p-4 self-end mt-4 pb-8 answer-element-ext">
                        <h2 class="mb-5 flex">${KPMGSvg}KPMG-Sec</h2>
                        <div class="result-streaming" id="${message.id}">${markedResponse}</div>
                    </div>`;
                }

                if (message.done) {
                    const preCodeList = list.lastChild.querySelectorAll("pre > code");

                    preCodeList.forEach((preCode) => {
                        preCode.classList.add("input-background", "p-4", "pb-2", "block", "whitespace-pre", "overflow-x-scroll");
                        preCode.parentElement.classList.add("pre-code-element", "relative");

                        const buttonWrapper = document.createElement("no-export");
                        buttonWrapper.classList.add("code-actions-wrapper", "flex", "gap-3", "pr-2", "pt-1", "pb-1", "flex-wrap", "items-center", "justify-end", "rounded-t-lg", "input-background");

                        // Create copy to clipboard button
                        const copyButton = document.createElement("button");
                        copyButton.title = "Copy to clipboard";
                        copyButton.innerHTML = `${clipboardSvg} Copy`;

                        copyButton.classList.add("code-element-ext", "p-1", "pr-2", "flex", "items-center", "rounded-lg");

                        const insert = document.createElement("button");
                        insert.title = "Replace the below code to the current file";
                        insert.innerHTML = `${insertSvg} Replace`;

                        insert.classList.add("edit-element-ext", "p-1", "pr-2", "flex", "items-center", "rounded-lg");

                        const newTab = document.createElement("button");
                        newTab.title = "Create a new file with the below code";
                        newTab.innerHTML = `${plusSvg} New`;

                        newTab.classList.add("new-code-element-ext", "p-1", "pr-2", "flex", "items-center", "rounded-lg");

                        buttonWrapper.append(copyButton, insert, newTab);

                        if (preCode.parentNode.previousSibling) {
                            preCode.parentNode.parentNode.insertBefore(buttonWrapper, preCode.parentNode.previousSibling);
                        } else {
                            preCode.parentNode.parentNode.prepend(buttonWrapper);
                        }
                    });

                    existingMessage = document.getElementById(message.id);
                    existingMessage.classList.remove("result-streaming");
                }

                if (message.autoScroll && (message.done || markedResponse.endsWith("\n"))) {
                    list.lastChild?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                }

                break;
            case "addError":
                if (!list.innerHTML) {
                    return;
                }

                const messageValue = message.value || "An error occurred. If this issue persists please clear your session token with `KPMG-Sec: Reset session` command and/or restart your Visual Studio Code. If you still experience issues, it may be due to outage on https://openai.com services.";

                list.innerHTML +=
                    `<div class="p-4 self-end mt-4 pb-8 error-element-ext">
                        <h2 class="mb-5 flex">${KPMGSvg}KPMG-Sec</h2>
                        <div class="text-red-400">${marked.parse(messageValue)}</div>
                    </div>`;

                if (message.autoScroll) {
                    list.lastChild?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                }
                break;
            case "clearConversation":
                clearConversation();
                break;
            case "exportConversation":
                exportConversation();
                break;
            case "loginSuccessful":
                document.getElementById("login-button")?.classList?.add("hidden");
                if (message.showConversations) {
                    document.getElementById("list-conversations-link")?.classList?.remove("hidden");
                }
                break;
            case "listConversations":
                list.classList.add("hidden");
                document.getElementById("introduction")?.classList?.add("hidden");
                const conversationList = document.getElementById("conversation-list");
                conversationList.classList.remove("hidden");
                const conversation_list = message.conversations.items.map(conversation => {
                    const chatDate = new Date(conversation.create_time).toLocaleString();
                    return `<button id="show-conversation-button" data-id="${conversation.id}" data-title="${conversation.title.replace(/"/g, '')}" data-time="${chatDate}" class="flex py-3 px-3 items-center gap-3 relative rounded-lg input-background cursor-pointer break-all group">${textSvg}<div class="flex flex-col items-start gap-2 truncate"><span class="text-left font-bold">${conversation.title}</span><div class="text-xs text-left">${chatDate}</div></div></button>`;
                });
                conversationList.innerHTML = `<div class="flex flex-col gap-4 text-sm relative overflow-y-auto p-8">
                    <div class="flex justify-center gap-4">
                        <button id="refresh-conversations-button" title="Reload conversations" class="p-1 pr-2 flex items-center rounded-lg">${refreshSvg}&nbsp;Reload</button>
                        <button id="close-conversations-button" title="Close conversations panel" class="p-1 pr-2 flex items-center rounded-lg">${closeSvg}&nbsp;Close</button>
                    </div>
                    <div class="flex flex-col gap-4">${conversation_list.join("")}</div>
                </div>`;
                break;
            default:
                break;
        }
    });

    const addFreeTextQuestion = () => {
        const input = document.getElementById("question-input");
        if (input.value?.length > 0) {
            vscode.postMessage({
                type: "addFreeTextQuestion",
                value: input.value,
            });

            input.value = "";
        }
    };

    const clearConversation = () => {
        document.getElementById("qa-list").innerHTML = "";

        document.getElementById("introduction")?.classList?.remove("hidden");

        vscode.postMessage({
            type: "clearConversation"
        });

    };

    const exportConversation = () => {
        const turndownService = new TurndownService({ codeBlockStyle: "fenced" });
        turndownService.remove('no-export');
        let markdown = turndownService.turndown(document.getElementById("qa-list"));

        vscode.postMessage({
            type: "openNew",
            value: markdown,
            language: "markdown"
        });
    };

    document.getElementById('question-input').addEventListener("keydown", function (event) {
        if (event.key == "Enter" && !event.shiftKey && !event.isComposing) {
            event.preventDefault();
            addFreeTextQuestion();
        }
    });

    document.addEventListener("click", (e) => {
        const targetButton = e.target.closest('button');

        if (targetButton?.id === "more-button") {
            e.preventDefault();
            document.getElementById('chat-button-wrapper')?.classList.toggle("hidden");

            return;
        } else {
            document.getElementById('chat-button-wrapper')?.classList.add("hidden");
        }

        if (e.target?.id === "settings-button") {
            e.preventDefault();
            vscode.postMessage({
                type: "openSettings",
            });
            return;
        }

        if (e.target?.id === "settings-prompt-button") {
            e.preventDefault();
            vscode.postMessage({
                type: "openSettingsPrompt",
            });
            return;
        }

        if (targetButton?.id === "login-button") {
            e.preventDefault();
            vscode.postMessage({
                type: "login",
            });
            return;
        }

        if (targetButton?.id === "ask-button") {
            e.preventDefault();
            addFreeTextQuestion();
            return;
        }

        if (targetButton?.id === "clear-button") {
            e.preventDefault();
            clearConversation();
            return;
        }

        if (targetButton?.id === "export-button") {
            e.preventDefault();
            exportConversation();
            return;
        }

        if (targetButton?.id === "list-conversations-button" || targetButton?.id === "list-conversations-link") {
            e.preventDefault();

            vscode.postMessage({ type: "listConversations" });
            return;
        }

        if (targetButton?.id === "show-conversation-button") {
            e.preventDefault();

            vscode.postMessage({ type: "showConversation", value: targetButton.getAttribute("data-id") });

            document.getElementById("qa-list").innerHTML = `<div class="flex flex-col p-6 pt-2">
                <h2 class="text-lg">${targetButton.getAttribute("data-title")}</h2>
                <span class="text-xs">Started on: ${targetButton.getAttribute("data-time")}</span>
            </div>`;

            document.getElementById("qa-list").classList.remove("hidden");
            document.getElementById("introduction").classList.add("hidden");
            document.getElementById("conversation-list").classList.add("hidden");
            return;
        }

        if (targetButton?.id === "refresh-conversations-button") {
            e.preventDefault();

            vscode.postMessage({ type: "listConversations" });
            return;
        }

        if (targetButton?.id === "close-conversations-button") {
            e.preventDefault();
            const qaList = document.getElementById('qa-list');
            qaList.classList.add("hidden");
            document.getElementById('conversation-list').classList.add("hidden");
            document.getElementById('introduction').classList.add("hidden");
            if (qaList.innerHTML?.length > 0) {
                qaList.classList.remove("hidden");
            } else {
                document.getElementById('introduction').classList.remove("hidden");
            }
            return;
        }

        if (targetButton?.id === "stop-button") {
            e.preventDefault();
            vscode.postMessage({
                type: "stopGenerating",
            });

            return;
        }

        if (targetButton?.classList?.contains("resend-element-ext")) {
            e.preventDefault();
            const question = targetButton.closest(".question-element-ext");
            const elements = targetButton.nextElementSibling;
            elements.classList.remove("hidden");
            question.lastElementChild?.setAttribute("contenteditable", true);

            targetButton.classList.add("hidden");

            return;
        }

        if (targetButton?.classList?.contains("send-element-ext")) {
            e.preventDefault();

            const question = targetButton.closest(".question-element-ext");
            const elements = targetButton.closest(".send-cancel-elements-ext");
            const resendElement = targetButton.parentElement.parentElement.firstElementChild;
            elements.classList.add("hidden");
            resendElement.classList.remove("hidden");
            question.lastElementChild?.setAttribute("contenteditable", false);

            if (question.lastElementChild.textContent?.length > 0) {
                vscode.postMessage({
                    type: "addFreeTextQuestion",
                    value: question.lastElementChild.textContent,
                });
            }
            return;
        }

        if (targetButton?.classList?.contains("cancel-element-ext")) {
            e.preventDefault();
            const question = targetButton.closest(".question-element-ext");
            const elements = targetButton.closest(".send-cancel-elements-ext");
            const resendElement = targetButton.parentElement.parentElement.firstElementChild;
            elements.classList.add("hidden");
            resendElement.classList.remove("hidden");
            question.lastElementChild?.setAttribute("contenteditable", false);
            return;
        }

        if (targetButton?.classList?.contains("code-element-ext")) {
            e.preventDefault();
            navigator.clipboard.writeText(targetButton.parentElement?.nextElementSibling?.lastChild?.textContent).then(() => {
                targetButton.innerHTML = `${checkSvg} Copied`;

                setTimeout(() => {
                    targetButton.innerHTML = `${clipboardSvg} Copy`;
                }, 1500);
            });

            return;
        }

        if (targetButton?.classList?.contains("edit-element-ext")) {
            e.preventDefault();
            vscode.postMessage({
                type: "editCode",
                value: targetButton.parentElement?.nextElementSibling?.lastChild?.textContent,
            });

            return;
        }

        if (targetButton?.classList?.contains("new-code-element-ext")) {
            e.preventDefault();
            vscode.postMessage({
                type: "openNew",
                value: targetButton.parentElement?.nextElementSibling?.lastChild?.textContent,
            });

            return;
        }
    });

})();
