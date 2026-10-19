# Project curation and evidence

Reviewed against Ayush's public GitHub repositories on 19 October 2026. This document records the basis for the portfolio copy. It is not a security or production-readiness audit of the linked projects.

## Selection

The public GitHub profile pins StartupConnect and Online-Cheat-Detector and describes them as featured projects. They remain first. Four newer repositories were selected to show distinct work: systems engineering, data/ML, accessible interaction, and product comparison. Repository popularity was not used as an unsupported quality score.

## Sources

| Project | Verified source | Claims used |
| --- | --- | --- |
| StartupConnect | [README](https://github.com/Iush-Yadav/StartupConnect/blob/main/README.md), [store.ts](https://github.com/Iush-Yadav/StartupConnect/blob/main/src/lib/store.ts), [ChatBox.tsx](https://github.com/Iush-Yadav/StartupConnect/blob/main/src/components/Chat/ChatBox.tsx) | Entrepreneur/investor profiles, structured startup posts, follows, likes, Supabase queries, direct messaging. |
| Online Cheat Detector | [README](https://github.com/Iush-Yadav/Online-Cheat-Detector/blob/main/README.md), [Flask implementation](https://github.com/Iush-Yadav/Online-Cheat-Detector/blob/main/Cheat%20Detection%20System/Cheat%20Detection%20In%20System%20and%20Web/app.py) | MediaPipe iris landmarks, relative iris positions, 3-second calibration, left/right counters, sustained-glance timing, event logging, and Flask video/dashboard. |
| HyperCache | [README](https://github.com/Iush-Yadav/HyperCache/blob/main/README.md), [router.py](https://github.com/Iush-Yadav/HyperCache/blob/main/router.py) | Three replica demo, Python sockets, UCB1 reads, replicated writes, one read retry, temporary quarantine after consecutive failures, benchmark tooling. |
| CareFlow | [README](https://github.com/Iush-Yadav/CareFlow/blob/main/README.md), [anomaly training](https://github.com/Iush-Yadav/CareFlow/blob/main/ml/training/anomaly_detection.py), [prediction UI](https://github.com/Iush-Yadav/CareFlow/blob/main/frontend/src/components/SectionPrediction.tsx) | Synthetic claims, PostgreSQL pipeline, Isolation Forest, LightGBM utilisation model, SHAP feature contributions. |
| Saathi | [README](https://github.com/Iush-Yadav/SIH-Saathi/blob/main/README.md), [core.js](https://github.com/Iush-Yadav/SIH-Saathi/blob/main/core.js) | Four activity domains, adaptive levels from session history, Hindi intent handling, local/remote record merging; offline-first SIH prototype. |
| FitCheck | [README](https://github.com/Iush-Yadav/FitCheck/blob/main/README.md), [comparison.ts](https://github.com/Iush-Yadav/FitCheck/blob/main/src/lib/comparison.ts) | cm/in conversion, reference vs candidate measurements, user preference ranges, measurement-method/category validation, missing-data status. |

Observed file SHAs for key source reads:

- StartupConnect store.ts: `c4338658a11251eefd5d7662297e3cda2c50cc91`
- StartupConnect ChatBox.tsx: `e460160028eb8912e3eb31a01642f1f6351333c4`
- Online Cheat Detector app.py: `4b5f48bc5e44d03769553eb0bd1a046e9d54b84a`
- HyperCache router.py: `f01508d0af32305bfb663f1f0bfdaafedb551477`
- FitCheck comparison.ts: `5f5264abe179b0ab786ed14927769c079bbbe37e`
- Saathi core.js: `ef16910e2a1c56647421a29047e29b5f40af71a3`
- CareFlow SectionPrediction.tsx: `13b0def891fca980d26a5cc2d11a7f6650d29c06`

## Live links and limits

StartupConnect's existing live URL is retained. Saathi's published URL is from its README and was opened successfully in the browser. The remaining projects link to source because no verified public deployment was identified. Authenticated flows and external project backends were not exercised.

The portfolio contains no invented experience, graduation year, clinical claims, real-world model accuracy, customer counts, or benchmark improvements. The healthcare demo uses synthetic data. Gaze movement is not proof of cheating. FitCheck compares measurements without guaranteeing physical fit.

## Portfolio demonstrations

The six project previews are original illustrations. They do not send data to project backends, use a camera, or run a healthcare model. HyperCache uses the repository's UCB1 selection formula with fixed sample latencies. FitCheck shows an illustrative chest comparison. Saathi shows a small shape-pattern exercise with English/Hindi copy. CareFlow highlights one predetermined sample bar and identifies it as illustrative data.
