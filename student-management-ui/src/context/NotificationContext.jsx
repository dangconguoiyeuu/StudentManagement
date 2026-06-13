import React, { createContext, useCallback, useContext, useRef, useState } from 'react';

const NotificationContext = createContext(null);

let toastCounter = 0;

export function NotificationProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const [confirmState, setConfirmState] = useState(null);
    const confirmResolver = useRef(null);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const notify = useCallback((message, type = 'info', duration = 4500) => {
        const id = ++toastCounter;
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => removeToast(id), duration);
        return id;
    }, [removeToast]);

    notify.success = (message, duration) => notify(message, 'success', duration);
    notify.error = (message, duration) => notify(message, 'error', duration);
    notify.warning = (message, duration) => notify(message, 'warning', duration);
    notify.info = (message, duration) => notify(message, 'info', duration);

    const confirm = useCallback((options = {}) => {
        return new Promise((resolve) => {
            confirmResolver.current = resolve;
            setConfirmState({
                title: options.title || 'Xác nhận thao tác',
                message: options.message || 'Bạn có chắc chắn muốn tiếp tục?',
                confirmText: options.confirmText || 'Xác nhận',
                cancelText: options.cancelText || 'Hủy bỏ',
                variant: options.variant || 'primary',
            });
        });
    }, []);

    const closeConfirm = (result) => {
        setConfirmState(null);
        confirmResolver.current?.(result);
        confirmResolver.current = null;
    };

    return (
        <NotificationContext.Provider value={{ notify, confirm }}>
            {children}
            <div className="toast-container" aria-live="polite" aria-atomic="true">
                {toasts.map((toast) => (
                    <div key={toast.id} className={`toast toast--${toast.type}`} role="alert">
                        <span className="toast__icon">{TOAST_ICONS[toast.type]}</span>
                        <span className="toast__message">{toast.message}</span>
                        <button
                            type="button"
                            className="toast__close"
                            onClick={() => removeToast(toast.id)}
                            aria-label="Đóng thông báo"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
            {confirmState && (
                <div className="modal-overlay" role="dialog" aria-modal="true">
                    <div className="modal-dialog">
                        <div className="modal-dialog__header">
                            <h3 className="modal-dialog__title">{confirmState.title}</h3>
                        </div>
                        <div className="modal-dialog__body">
                            <p className="modal-dialog__message">{confirmState.message}</p>
                        </div>
                        <div className="modal-dialog__footer">
                            <button
                                type="button"
                                className="btn btn--secondary"
                                onClick={() => closeConfirm(false)}
                            >
                                {confirmState.cancelText}
                            </button>
                            <button
                                type="button"
                                className={`btn btn--${confirmState.variant}`}
                                onClick={() => closeConfirm(true)}
                                autoFocus
                            >
                                {confirmState.confirmText}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </NotificationContext.Provider>
    );
}

const TOAST_ICONS = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
};

export function useNotification() {
    const ctx = useContext(NotificationContext);
    if (!ctx) {
        throw new Error('useNotification phải được dùng bên trong NotificationProvider');
    }
    return ctx;
}
