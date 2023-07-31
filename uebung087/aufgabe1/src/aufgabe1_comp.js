function Section(props) {
    return (<>
        <section>
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
        </section>
        </>
    );
}

export function Header(props) {
    return (
        <header>
            <h1>{props.name} React Komponenten</h1>
        </header>
    );
}

export function Main() {
    // let props = {hl: "Willkommen", inhalt: "Testinhalt"};
    return (
        <main>
        <Section h2="Willkommen" p="Herzlich willkommen auf meiner einfachen Webseite!"/>
        <Section h2="Über mich" p="Hier ist eine kurze Beschreibung über mich und meine Interessen." />
        <Section h2="Kontakt" p="Bei Fragen oder Anregungen können Sie mich gerne kontaktieren:
                kontakt@meinewebseite.de"/>
        </main>
    );

}

export function Footer() {
    return (
        <footer>
        <p>© 2023 Meine Webseite</p>
        </footer>
        );
}
