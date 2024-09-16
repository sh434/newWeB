import React from 'react'
import './Pagination.css'

const Pagination = () => {
    return (
        <div><div className="page__pagination--area mb-30">
            <ul className="page__pagination--wrapper d-flex justify-content-center">
                <li className="page__pagination--list">
                    <a className="page__pagination--link" href="#">
                        <svg
                            width={12}
                            height={11}
                            viewBox="0 0 12 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 5.12695C5.73633 5.39062 5.73633 5.83008 6 6.12305L9.98438 10.1074C10.2773 10.3711 10.7168 10.3711 10.9805 10.1074L11.6543 9.43359C11.918 9.14062 11.918 8.70117 11.6543 8.4375L8.8125 5.5957L11.6543 2.7832C11.918 2.51953 11.918 2.08008 11.6543 1.78711L10.9805 1.14258C10.7168 0.849609 10.2773 0.849609 9.98437 1.14258L6 5.12695ZM0.375 6.12305L4.35938 10.1074C4.65234 10.3711 5.0918 10.3711 5.35547 10.1074L6.0293 9.43359C6.29297 9.16992 6.29297 8.70117 6.0293 8.4375L3.1875 5.625L6.0293 2.7832C6.29297 2.51953 6.29297 2.08008 6.0293 1.78711L5.35547 1.14258C5.0918 0.849609 4.62305 0.849609 4.35937 1.14258L0.375 5.12695C0.111328 5.39063 0.111328 5.83008 0.375 6.12305Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                </li>
                <li className="page__pagination--list">
                    <a className="page__pagination--link" href="#">
                        1
                    </a>
                </li>
                <li className="page__pagination--list">
                    <a className="page__pagination--link active" href="#">
                        2
                    </a>
                </li>
                <li className="page__pagination--list">
                    <a className="page__pagination--link" href="#">
                        3
                    </a>
                </li>
                <li className="page__pagination--list">
                    <a className="page__pagination--link" href="#">
                        <svg
                            width={12}
                            height={11}
                            viewBox="0 0 12 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 5.87305C6.26367 5.60938 6.26367 5.16992 6 4.87695L2.01562 0.892578C1.72266 0.628906 1.2832 0.628906 1.01953 0.892578L0.345703 1.56641C0.0820312 1.85938 0.0820312 2.29883 0.345703 2.5625L3.1875 5.4043L0.345703 8.2168C0.0820312 8.48047 0.0820312 8.91992 0.345703 9.21289L1.01953 9.85742C1.2832 10.1504 1.72266 10.1504 2.01562 9.85742L6 5.87305ZM11.625 4.87695L7.64062 0.892578C7.34766 0.628906 6.9082 0.628906 6.64453 0.892578L5.9707 1.56641C5.70703 1.83008 5.70703 2.29883 5.9707 2.5625L8.8125 5.375L5.9707 8.2168C5.70703 8.48047 5.70703 8.91992 5.9707 9.21289L6.64453 9.85742C6.9082 10.1504 7.37695 10.1504 7.64062 9.85742L11.625 5.87305C11.8887 5.60938 11.8887 5.16992 11.625 4.87695Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
        </div>
    )
}

export default Pagination