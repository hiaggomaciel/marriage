import Link from 'next/link';

export default function Header() {
    const menuItems = [
        { label: 'Comece por aqui!', href: '#inicio' },
        { label: 'O casamento', href: '#casamento' },
        { label: 'O casal', href: '#casal' },
        { label: 'Local', href: '#local' },
        { label: 'Dicas', href: '#dicas' },
        { label: 'Sugestão de Vestimenta', href: '#vestimenta' },
        { label: 'Lista de presentes', href: '#presentes' },
        { label: 'Recados', href: '#recados' },
        { label: 'Confirme sua presença', href: '#rsvp' },
    ];

    return (
        <header className="header">
            <nav>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} passHref scroll={false}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}