'use client';

import React, { useEffect, useState } from 'react';
import './database.css';

interface TableInfo {
    name: string;
    rowCount: number;
}

export default function DatabasePage() {
    const [tables, setTables] = useState<TableInfo[]>([
        { name: 'content', rowCount: 1 },
        { name: 'user', rowCount: 1 },
        { name: 'analytics_event', rowCount: 0 },
        { name: 'user_session', rowCount: 0 },
        { name: 'subscriber', rowCount: 0 },
        { name: 'comment', rowCount: 0 },
        { name: 'media', rowCount: 0 },
        { name: 'setting', rowCount: 0 }
    ]);
    const [selectedTable, setSelectedTable] = useState<string | null>(null);

    return (
        <div className="database-page">
            <div className="page-header">
                <h2><i className="fas fa-database"></i> Gestión de Base de Datos</h2>
                <p>Visualiza y gestiona todas las tablas de la base de datos</p>
            </div>

            <div className="database-grid">
                <div className="tables-sidebar">
                    <h3>Tablas ({tables.length})</h3>
                    <div className="tables-list">
                        {tables.map((table) => (
                            <div
                                key={table.name}
                                className={`table-item ${selectedTable === table.name ? 'active' : ''}`}
                                onClick={() => setSelectedTable(table.name)}
                            >
                                <i className="fas fa-table"></i>
                                <div className="table-info">
                                    <span className="table-name">{table.name}</span>
                                    <span className="table-count">{table.rowCount} rows</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="table-content">
                    {selectedTable ? (
                        <>
                            <div className="table-header">
                                <h3>Tabla: {selectedTable}</h3>
                                <div className="table-actions">
                                    <button className="btn-secondary">
                                        <i className="fas fa-download"></i> Exportar
                                    </button>
                                    <button className="btn-danger">
                                        <i className="fas fa-trash"></i> Limpiar
                                    </button>
                                </div>
                            </div>
                            <div className="table-viewer">
                                <p className="info-message">
                                    <i className="fas fa-info-circle"></i>
                                    Selecciona una tabla para ver sus datos. La funcionalidad completa de visualización se implementará próximamente.
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="empty-state">
                            <i className="fas fa-database"></i>
                            <h3>Selecciona una tabla</h3>
                            <p>Elige una tabla de la lista para ver su contenido</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
