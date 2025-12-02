import Address from './Address';

const Footer = () => {
    return (
        <>
            <Address></Address>
            <div className="mt-12 border-t border-emerald-100 pt-8 text-center">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Multilateral Model Institute. All rights reserved.
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                    Crafted with ❤️ by{" "}
                    <a
                        href="https://www.growbizlab.cloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                        Growbiz Lab
                    </a>
                </p>
            </div>
        </>
    );
};

export default Footer;