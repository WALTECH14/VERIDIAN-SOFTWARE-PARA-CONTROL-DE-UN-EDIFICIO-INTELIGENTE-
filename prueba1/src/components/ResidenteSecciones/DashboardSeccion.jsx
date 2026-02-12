// src/components/ResidenteSecciones/DashboardSeccion.jsx
import React from 'react';

const DashboardSeccion = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard del Residente</h2>
      
      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Próximo Pago</p>
              <p className="text-2xl font-bold text-gray-800">$350.00</p>
              <p className="text-xs text-gray-500">Vence en 5 días</p>
            </div>
            <span className="text-2xl">💳</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Reservas Activas</p>
              <p className="text-2xl font-bold text-gray-800">2</p>
              <p className="text-xs text-gray-500">Este mes</p>
            </div>
            <span className="text-2xl">📅</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Reportes Abiertos</p>
              <p className="text-2xl font-bold text-gray-800">1</p>
              <p className="text-xs text-gray-500">En proceso</p>
            </div>
            <span className="text-2xl">🔧</span>
          </div>
        </div>
      </div>

      {/* Notificaciones recientes */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Notificaciones Recientes</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
            <span className="text-blue-500 mt-1">📢</span>
            <div>
              <p className="font-medium text-gray-800">Mantenimiento programado</p>
              <p className="text-sm text-gray-600">El próximo viernes se realizará mantenimiento en las áreas comunes</p>
              <p className="text-xs text-gray-500">Hace 2 días</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
            <span className="text-green-500 mt-1">✅</span>
            <div>
              <p className="font-medium text-gray-800">Pago confirmado</p>
              <p className="text-sm text-gray-600">Tu pago de octubre ha sido procesado exitosamente</p>
              <p className="text-xs text-gray-500">Hace 5 días</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSeccion;