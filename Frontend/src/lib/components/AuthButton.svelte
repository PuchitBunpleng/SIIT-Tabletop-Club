<script>
    import { goto } from '$app/navigation'

    export let path
    export let text

    let handleClick = () => {
        goto(path)
    }
</script>

<button class="button" on:click={handleClick}>{text}</button>

<style>
    .button {
		background: #9a3197;
		border: none;
		border-radius: 0.8rem;
		padding: 0.8rem 1rem;
		color: #fdf6fd;
	}

	.button:hover {
		background: rgb(154, 49, 151, 0.5);
        cursor: pointer;
	}
</style>