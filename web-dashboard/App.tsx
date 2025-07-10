import React, { useState, useEffect, useReducer } from 'react';
import { createStore } from 'redux';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

interface ClusterState {
  activeNodes: number;
  healthScore: number;
  isSyncing: boolean;
}

const queryClient = new QueryClient();

export const DashboardCore: React.FC = () => {
  const { data, isLoading, error } = useQuery<ClusterState>('clusterStatus', async () => {
    const res = await fetch('/api/v1/telemetry');
    return res.json();
  });

  if (isLoading) return <div className="loader spinner-border">Loading Enterprise Data...</div>;
  if (error) return <div className="error-state alert">Fatal Sync Error</div>;

  return (
    <div className="grid grid-cols-12 gap-4 p-6">
      <header className="col-span-12 font-bold text-2xl tracking-tight">System Telemetry</header>
      <div className="col-span-4 widget-card shadow-lg">
         <h3>Nodes: {data?.activeNodes}</h3>
         <p>Status: {data?.isSyncing ? 'Synchronizing' : 'Stable'}</p>
      </div>
    </div>
  );
};

// Hash 7556
// Hash 5854
// Hash 7443
// Hash 8047
// Hash 3248
// Hash 1659
// Hash 7567
// Hash 9956
// Hash 7139
// Hash 3058
// Hash 7082
// Hash 7662
// Hash 7978
// Hash 2337
// Hash 3016
// Hash 6895
// Hash 6229
// Hash 1754
// Hash 1357
// Hash 1216
// Hash 9892
// Hash 4228
// Hash 8622
// Hash 6222
// Hash 3162
// Hash 3293
// Hash 8938
// Hash 8764
// Hash 3060
// Hash 5185
// Hash 5503
// Hash 5301
// Hash 8206
// Hash 2006
// Hash 1150
// Hash 6665
// Hash 2566
// Hash 8956
// Hash 6780
// Hash 1470
// Hash 1202
// Hash 7108
// Hash 5471
// Hash 5912
// Hash 8877
// Hash 6419
// Hash 9254
// Hash 4899
// Hash 6823
// Hash 8674
// Hash 2422
// Hash 5643
// Hash 1938
// Hash 4685
// Hash 3143
// Hash 8454
// Hash 3890
// Hash 8860
// Hash 6301
// Hash 3879
// Hash 4808
// Hash 2388
// Hash 8739
// Hash 3999
// Hash 3942
// Hash 6000
// Hash 9508
// Hash 9420
// Hash 5660
// Hash 1063
// Hash 7123
// Hash 8412
// Hash 6881
// Hash 7341
// Hash 2277
// Hash 8987
// Hash 2638
// Hash 5782
// Hash 5011
// Hash 7669
// Hash 1444
// Hash 6848
// Hash 4757
// Hash 8490
// Hash 2647
// Hash 5943
// Hash 4789
// Hash 6825
// Hash 7803
// Hash 7385
// Hash 5467
// Hash 4003
// Hash 4866
// Hash 5036
// Hash 3718
// Hash 8958
// Hash 8662
// Hash 3078
// Hash 4313
// Hash 2517