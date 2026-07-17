$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reducedMotion) {
        document.querySelectorAll('.post-header .motto, .publications > a.motto').forEach(function(motto) {
            const text = motto.textContent.trim();
            if (!text) return;

            motto.setAttribute('aria-label', text);
            motto.setAttribute('aria-live', 'off');
            motto.textContent = '';
            motto.classList.add('typewriter-active');

            const baseDelay = text.length > 80 ? 35 : 70;
            let index = 0;

            function writeNextCharacter() {
                const character = text.charAt(index);
                motto.textContent += character;
                index += 1;

                if (index < text.length) {
                    let delay = character === ' ' ? baseDelay * 0.4 : baseDelay;
                    delay += Math.random() * baseDelay * 0.5;
                    if (/[,.!?;:]/.test(character)) delay += baseDelay * 3;
                    window.setTimeout(writeNextCharacter, delay);
                } else {
                    motto.classList.add('typewriter-complete');
                }
            }

            writeNextCharacter();
        });
    }
});
