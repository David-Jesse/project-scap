import { createFileRoute, Link, useLoaderData, useRouter } from '@tanstack/react-router'
import { Helmet } from 'react-helmet'
import toast from 'react-hot-toast'
import { Input } from '../../components/input'
import TagInput from '../../components/tag-input'
import ProfileButton from '../../components/profile-button'
import { useHookForm } from '../../hooks/useHookForm'
import { createJobAlertSchema } from '../../schemas/job_alert'
import { createJobAlert } from '../../network/job_alert'
import { toastError } from '../../utils'
import CreateSuccessIcon from '../../assets/create-success-icon.svg?react'
import DialogModal from '../../components/modal'


export const Route = createFileRoute('/_auth_routes/create-alert')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth_routes/create-alert"!</div>
}
