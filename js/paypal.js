// appendScript wurde entfernt, da kein PayPal SDK mehr benötigt wird

static friendsBits = (class_name = 'friend-selector') => {
    return Array
        .from(document.getElementsByClassName(class_name))
        .reduce((acc, x) => {
            if (x.checked) {
                acc += parseInt(x.value);
            }
            return acc;
        }, 0);
}

static friendsPrice = (class_name = 'friend-selector') => {
    return Array
        .from(document.getElementsByClassName(class_name))
        .reduce((acc, x) => {
            if (x.checked) {
                acc += +x.dataset.price;
            }
            return acc;
        }, 0);
}

static period = () => {
    const p = document.querySelector('input[name="friends-period"]:checked');
    return p ? p.value : 11;
}

static page = () => {
    Promise
        .all([
            // Wartezeit auf PayPal-Script entfernt
            du.loadUrlToElem('page', 'html/paypal.html', config),
        ])
        .then(() => Labs.getData({
            'friends': 0,
            'html': 'friends'
        }))
        .then(html => {
            du.setInnerHtml('friends-container', html);

            // Hier wurde die gesamte paypal.Buttons Logik entfernt.
            // Falls du eine Nachricht anzeigen willst statt der Buttons:
            du.setInnerHtml('paypal-button-container', '<p>Zahlungsfunktion deaktiviert.</p>');
        })
        .then(() => du.setChecked("symbol-page"));
}















