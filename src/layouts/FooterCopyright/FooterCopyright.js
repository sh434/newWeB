import React from 'react'
import { Link } from 'react-router-dom'
import "../Footer/Footer.css"

const FooterCopyright = () => {
    return (
        <div className="footer__bottom color-offwhite text-center">
            <div className="container">
                <div className="footer__bottom--inner">
                    <p className="copyright__content mb-0">
                        <span className="text__secondary">© 2024 Wpm</span> Powered By{" "}
                        <Link
                            className="copyright__content--link"
                            target="_blank"
                            href="https://themeforest.net/search/hooktheme"
                        >
                            Ads Role
                        </Link>{" "}
                        . All Rights Reserved.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default FooterCopyright