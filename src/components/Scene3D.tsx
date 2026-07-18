import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { LineBasicMaterial } from 'three'

const CODE_SNIPPETS = [
  'const app = express()',
  'async function fetch()',
  'export default App',
  'npm run build',
  'git commit -m',
  'useEffect(() =>',
  'await prisma.user',
  'return res.json',
  '{ status: 200 }',
  'interface Props',
  'type User = {',
  'docker compose up',
]

function createCodeTexture(text: string) {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 64
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = 'rgba(0,0,0,0)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.font = '500 22px "JetBrains Mono", monospace'
  ctx.fillStyle = '#22c55e'
  ctx.fillText(text, 8, 40)
  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

function CodePlanes() {
  const group = useRef<THREE.Group>(null)

  const planes = useMemo(
    () =>
      CODE_SNIPPETS.map((text, i) => ({
        text,
        texture: createCodeTexture(text),
        position: [
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 8,
          -2 - (i % 4) * 1.5,
        ] as [number, number, number],
        speed: 0.08 + (i % 5) * 0.03,
        offset: i * 1.7,
      })),
    [],
  )

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    group.current.children.forEach((child, i) => {
      const data = planes[i]
      child.position.x = data.position[0] + Math.sin(t * data.speed + data.offset) * 0.6
      child.position.y = data.position[1] + Math.cos(t * data.speed * 0.8 + data.offset) * 0.4
    })
  })

  return (
    <group ref={group}>
      {planes.map(({ text, texture, position }) => (
        <mesh key={text} position={position}>
          <planeGeometry args={[3.2, 0.45]} />
          <meshBasicMaterial map={texture} transparent opacity={0.35} depthWrite={false} />
        </mesh>
      ))}
    </group>
  )
}

function BracketNodes() {
  const group = useRef<THREE.Group>(null)

  const nodes = useMemo(
    () => [
      { id: 'brace-open', pos: [-4, 1, -3] as [number, number, number] },
      { id: 'brace-close', pos: [4, -0.5, -4] as [number, number, number] },
      { id: 'node-a', pos: [-2, -2, -2] as [number, number, number] },
      { id: 'node-b', pos: [3, 2, -5] as [number, number, number] },
      { id: 'node-c', pos: [0, 3, -3] as [number, number, number] },
    ],
    [],
  )

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.04
    }
  })

  return (
    <group ref={group}>
      {nodes.map(({ id, pos }) => (
        <mesh key={id} position={pos}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial color="#22c55e" wireframe transparent opacity={0.25} />
        </mesh>
      ))}
    </group>
  )
}

function ConnectionLines() {
  const ref = useRef<THREE.LineSegments>(null)
  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = []
    for (let i = 0; i < 12; i++) {
      const x1 = (Math.random() - 0.5) * 12
      const y1 = (Math.random() - 0.5) * 6
      const z1 = -2 - Math.random() * 4
      const x2 = x1 + (Math.random() - 0.5) * 3
      const y2 = y1 + (Math.random() - 0.5) * 2
      const z2 = z1 - Math.random() * 2
      points.push(new THREE.Vector3(x1, y1, z1), new THREE.Vector3(x2, y2, z2))
    }
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [])

  useFrame((state) => {
    if (ref.current) {
      const mat = ref.current.material as LineBasicMaterial
      mat.opacity = 0.08 + Math.sin(state.clock.elapsedTime * 0.5) * 0.04
    }
  })

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#22c55e" transparent opacity={0.1} />
    </lineSegments>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <CodePlanes />
      <BracketNodes />
      <ConnectionLines />
    </>
  )
}

export function Scene3D() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden opacity-50 sm:block" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 1, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
