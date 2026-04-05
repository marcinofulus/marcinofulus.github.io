/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chapter1 from './pages/Chapter1';
import Chapter2 from './pages/Chapter2';
import IntegralLab from './pages/IntegralLab';
import GradientDescent from './pages/GradientDescent';
import GradientDescent2D from './pages/GradientDescent2D';
import KMeans from './pages/KMeans';
import LinearTransformations from './pages/LinearTransformations';
import Layout from './components/Layout';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapter1" element={<Chapter1 />} />
          <Route path="/chapter2" element={<Chapter2 />} />
          <Route path="/integral" element={<IntegralLab />} />
          <Route path="/gradient" element={<GradientDescent />} />
          <Route path="/gradient2d" element={<GradientDescent2D />} />
          <Route path="/kmeans" element={<KMeans />} />
          <Route path="/linear" element={<LinearTransformations />} />
        </Routes>
      </Layout>
    </Router>
  );
}
